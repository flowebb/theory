const SocialLogin = (props) => {
    const loginStyle = {
        color: 'white',
        backgroundColor: props.bg,
        padding: '14px 16px',
        width: 'fit-content',
        margin: '5px',
        borderRadius: '10px',
        fontSize: '15px',
        fontWeight: '700s',
    };

    return (
        <div style={loginStyle}>
            {props.icon} login{props.name}
        </div>
    );
};
export default SocialLogin;
