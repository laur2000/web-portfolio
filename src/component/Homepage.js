import React from 'react'

export class Homepage extends React.Component {
    
    render(){
        var buttonStyle = {
            margin: '2px 1px 1px 0'
          };
        return (            
                <a href="https://laur2000.github.io/web-portfolio/">
                    <img src="http://www.auplod.com/u/padoulb7fac.png" style={buttonStyle} alt="Homepage-button" border="0" />
                </a>
            
        );
    }
}

export default Homepage;