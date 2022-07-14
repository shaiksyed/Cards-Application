const ProgressBar = (props) => {
    const { spent, available } = props;
  
    const containerStyles = {
      height: 15,
      width: '100%',
      backgroundColor: 'green',
      borderRadius: 50,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${spent/(available+spent)*100}%`,
      backgroundColor: '#E55451',
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'black',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;