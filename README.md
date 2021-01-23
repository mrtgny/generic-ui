# generic-ui

- This package is not a complete ui components. They are basic ui components that need to be customized to use.
- Also it has some simple useful components.

# Usage

```js
...
import {Card, appStyles, Mapper, Show } from "@reactivers/generic-ui"

const Sample = (props)=>{
	const items = [{name:"Item 1"}, {name:"Item 2"}, {name:"Hide Me", show:false}];
	return (
		<div style={{...appStyles.center}}>
			<Card>
				<Mapper items={items}>
					<ItemRenderer/>
				</Mapper>
			</Card>
		</div>
	)
}

const ItemRenderer = (props)=>{
	const {name, show} = props;
	return(
		<div>
			<Show condition={show}>
				{name}
			</Show>
		</div>
	)
}
```

