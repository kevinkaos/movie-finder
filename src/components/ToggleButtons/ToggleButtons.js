import React from 'react';
import setItemType from '../../actions/setItemTypeAction';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';


class ToggleButtons extends React.Component {

    render() {
        return (
          <div style={{display:"flex", justifyContent:"center"}}>
            <ButtonGroup>
              <Button size="lg" color="primary" active={this.props.itemType === 'MOVIE'} onClick={() => this.props.setItemType('MOVIE')}>Movies</Button>
              <Button size="lg" color="primary" active={this.props.itemType === 'TV'} onClick={() => this.props.setItemType('TV')}>TV Shows</Button>
            </ButtonGroup>
            {/* <p>Selected: {rSelected}</p> */}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemType: state.setItemType.itemType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setItemType: type => dispatch(setItemType(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButtons);