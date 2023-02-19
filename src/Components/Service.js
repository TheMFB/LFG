import React, { Component } from "react";
import { Icon } from '@mui/material';
import Avatar from '@mui/material/Avatar';

class Service extends Component {
  render() {
    if (!this.props.icon) return null;
    if (!this.props.text) return null;

    return (
      <div>

        <Avatar bgColor="info" alt="something here" shadow="md" sx={{ backgroundImage: `linear-gradient(30deg, ${this.props.bgColor}, ${this.props.bgColor2})`, borderStyle: 'solid', borderColor: this.props.borderColor, borderWidth: '2px', color: this.props.color }}>
          <Icon fontSize="medium" sx={{}}>{this.props.icon}</Icon>
        </Avatar>
        <h5>{this.props.text}</h5>
      </div>
    );
  }
}

export default Service;
