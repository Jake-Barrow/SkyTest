import React, { Component } from 'react';

class ChannelList extends Component {
    render() {
        var channels = this.props.channels.map((item, i) => {
            return (
                <li key={i}>
                    <label htmlFor={item.Id}>
                        <input type='checkbox'
                            id={item.Id}
                            className='channel'
                            onChange={this.props.onchange}
                            defaultChecked={item.Selected}
                        />
                        <span>{item.Name}</span>
                    </label>
                </li>);
        });

        return (
            <div className='ChannelList'>
                <p>{this.props.category}</p>
                <div className='Category'>
                    <ul>
                        {channels}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ChannelList;