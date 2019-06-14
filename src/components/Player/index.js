import React from 'react';
import Counter from '../Counter'

class Player extends React.Component {
    render () {
        return (
            <div>
                <span>
                    Name
                </span>

                <Counter />
            </div>
        )
    }
}

export default Player;