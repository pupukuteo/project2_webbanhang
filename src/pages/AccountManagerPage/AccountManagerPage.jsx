import React, {Component} from 'react';
import './../../components/AdminPage/account.css';
import AccountList from './../../components/AdminPage/AccountList/AccountList.jsx';
import AccountItem from './../../components/AdminPage/AccountItem/AccountItem.jsx';
import {connect} from 'react-redux';
import callApi from './../../utils/apiCaller.js';
import {Link} from 'react-router-dom';

class AccountManagerPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			accounts : []
		}
	}
	componentDidMount(){
		callApi('account', 'GET', null).then(res => {
			this.setState({
				accounts : res.data
			});
		});
	}

	onDelete = (id) => {
		console.log(id);
		var {accounts} = this.state;
		// var {index} = this.props.key;
		callApi('account/' + id, 'DELETE', null).then(res => {
			if(res.status === 200){
				console.log('xóa rồi');
				var index = this.findIndex(accounts, id);
				console.log(index);
				if(index !==  -1){
					accounts.splice(index, 1);
					this.setState({
						accounts : accounts
					});
				}
			}
		});
		
	}
	findIndex = (accounts, id) => {
		var result = -1;
		accounts.forEach((account, index) => {
			if(account.accID === id){
				result = index;
			}
		});
		return result;
	}

	render(){
		// var {accounts} = this.props;
		var {accounts} = this.state;
		
		
		return (		
			<div className = "account">
	    	 	<h2>Danh sách tài khoản</h2>
	    		<Link to="/account/add" class="btn btn-info">Thêm tài khoản</Link>   
	    		<hr/>      			
				<AccountList>

					{this.showAccounts(accounts)}

				</AccountList>
			</div>				
		);
		
	}
	showAccounts = (accounts) => {
			var result = null;
			if(accounts.length > 0){
				result = accounts.map((account, index) => {
					return (
						<AccountItem
							key = {index}
							account = {account}
							index = {index}
							onDelete = {this.onDelete}
						/>
						);
				});
			}
			return result;
		}
}

function mapStateToProps(state) {
  const accounts = state.tasks
  return {accounts}
}

export default connect(mapStateToProps, null)(AccountManagerPage);
