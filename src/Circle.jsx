const Circle = (props) => {
    const circleStyle = {
        width: props.size,
        height: props.size,
        borderRadius: '9999px',
        backgroundColor: props.bg,
    };
    const name = '떡볶이';
    return <div style={circleStyle}>{name}</div>;
};

export default Circle;
