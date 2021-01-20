import React, {forwardRef, useEffect, useState} from "react";
import {useApi, useLocalStorage} from "@reactivers/hooks";
import {Select} from "antd";

const {Option} = Select;

const QueryAutoComplete = forwardRef((props, ref) => {
    const {value, onChange, getOptions, valueKey, labelKey, minLength: _minLength, cache, ...rest} = props;
    const minLength = _minLength === undefined ? 3 : _minLength;
    const [search, setSearch] = useState(value);
    const [response, setResponse] = useState([]);

    const {fetched, fetching, load} = useApi({initialValue: []});
    const {getItem: getCache, setItem: setCache} = useLocalStorage("caches", "{}", true)

    const searchStringLength = (search || "").length;
    const shouldSearch = searchStringLength >= minLength;

    useEffect(() => {
        if (!search) {
            setSearch(value)
        }
    }, [value, search, setSearch])

    useEffect(() => {
        if (shouldSearch) {
            const apiOptions = getOptions(search)
            if (cache) {
                const oldCaches = getCache();
                const cacheValues = JSON.parse(oldCaches || "{}")
                const cacheKey = JSON.stringify(apiOptions);
                const existCache = cacheValues[cacheKey];
                if (existCache) {
                    setResponse(existCache)
                } else {
                    load({
                        ...apiOptions,
                        onSuccess: response => {
                            setCache(
                                JSON.stringify(
                                    {
                                        ...cacheValues,
                                        [cacheKey]: response
                                    }
                                )
                            )
                            setResponse(response)
                        }
                    })
                }
            } else {
                load({
                    ...apiOptions,
                    onSuccess: setResponse
                })
            }
        }
    }, [shouldSearch, searchStringLength, getOptions, cache, search])

    const onSelect = (e, option) => {
        onChange(e);
    };

    const getACOptions = () => {
        return (response || []).map(i => ({
            value: i[valueKey],
            label: i[labelKey]
        }))
    }

    const options = getACOptions();

    return (
        <Select
            {...rest}
            options={options}
            showSearch
            value={value}
            loading={fetching}
            onSelect={onSelect}
            ref={ref}
            onSearch={setSearch}
            optionFilterProp="label"
            defaultActiveFirstOption
            notFoundContent={fetched && !options.length ? "Bulunamadı" : null}>
            {options.map((option, index) => {
                return (
                    <Option key={index} value={option.value}>
                        {option.label}
                    </Option>
                );
            })}
        </Select>
    );
});

export default QueryAutoComplete;
