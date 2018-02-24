import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveExpenseModal from './RemoveExpenseModal';

export class EditExpensePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  // show modal
  onRemoveModal = () => {
    this.setState(() => ({
      modalIsOpen: true
    }));
  };

  // MOMDAL - confirm remove
  handleConfirmRemove = () => {
    this.setState(() => {
      modalIsOpen: false
    });
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  // MODAL - cancel remove
  handleCancelRemove = () => {
    this.setState(() => ({
      modalIsOpen: false
    }));
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary"
          onClick={this.onRemoveModal}
          >
          Remove Expense
          </button>
        </div>
        <RemoveExpenseModal
          modalIsOpen={this.state.modalIsOpen}
          handleConfirmRemove={this.handleConfirmRemove}
          handleCancelRemove={this.handleCancelRemove}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
