import React,{Component} from 'react';
import {render} from 'react-dom';
import createStore from './createStore';

const getPointsAction = (points, kind) => {
	return {
		type: 'FETCH_POINTS',
		point,
		kind
	};
};

const combineReducers = (reducers) => {
	return (state = {}, action) => {
		return Object.keys(reducers).reduce((nextState, key) => {
			nextState[key] = reducers[key](state[key],action);
			return nextState;
		}, {});
	}
};

const reducer = (state = [
	{
		points: '10',
		kind: 'Cool Kinds'
	},
	{
		points: '90',
		kind: 'Cool Kinds'
	},
	{
		points: '70',
		kind: 'Cool Kinds'
	}
	], action) => {
	console.log(`store initialized with state:${state}`);
	switch(action.type){
		case 'FETCH_POINTS':
			return [...state,
					{
						points: action.points,
						kind : action.kind
					}]
		default:
			return state;
	};
};

const store = createStore(reducer);

const ProgressBar = (props) => <progress style={{display:'block'}}value={props.points} max="100"></progress>;

class PointTracker extends Component{
	constructor(props){
		super(props);
		this.state = {
			points : store.getState()
		}
	}

	render(){
		return (
			<div>
				{this.state.points.map((point)=>{
					return <ProgressBar points={point.points}/>
				})}			
			</div>
		)
	}
}

render(<PointTracker/>,document.getElementById('app'));