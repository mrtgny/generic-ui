const appStyles = {
    stretchRow: {
        display: 'flex',
        alignItems: 'stretch',
        flexFlow: 'row wrap'
    },
    defaultShadow: {
        boxShadow: "0 0 5px -2.75px black",
    },
    cardBorderRadius: {
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexShrink: 0
    },
    centerInColumn: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column'
    },
    secondaryText: {
        color: '#aaa'
    },
    imageStyle: {
        height: "100%",
        width: '100%',
        borderRadius: 20,
        resizeMode: 'contain',
    },
    listHeader: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    spreadHorizontally: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    paddingHorizontal: (value) => ({
        paddingLeft: value,
        paddingRight: value
    }),
    paddingVertical: (value) => ({
        paddingTop: value,
        paddingBottom: value
    }),
    marginHorizontal: (value) => ({
        marginLeft: value,
        marginRight: value
    }),
    marginVertical: (value) => ({
        marginTop: value,
        marginBottom: value
    }),
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    card: {
        backgroundColor: 'white',
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 'initial'
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    cardSubtitle: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '300'
    },
    rounded: size => ({
        width: size,
        height: size,
        borderRadius: size * 2
    }),
    roundedImage: {
        width: '100%',
        objectFit: "cover",
        borderRadius: "50%"
    },
    threeDot: {
        whiteSpace: 'nowrap',
        width: '100%',
        display: 'inline-block',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    toolTip: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: "2px 6px",
        borderRadius: 10
    }
}


export default appStyles
