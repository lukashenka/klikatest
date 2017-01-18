import React, {Component} from 'react'

export default class DataSort extends Component {

    onSortChange(elem) {
        const {changeSort} = this.props;
        const {id, value} = elem.target;
        changeSort({id: value});
    }

    render() {
        const {sortableFields, sortField, sortTypes} = this.props.sort;
        const header = this.props.header;
        return <div>
            <form className='form-horizontal'>
                <div className='form-group'>
                    <label className='col-sm-2 control-label'>Сортировка</label>
                    <div className='col-sm-4'>
                        <select onChange={::this.onSortChange} className='form-control' defaultValue={Object.keys(sortField)[0]}>
                            return {sortableFields.map((sortValue, index) => {
                            return <option key={index} id={sortValue} value={sortValue}>{header[sortValue]}</option>
                        })}
                        </select>
                    </div>
                    <div className='col-sm-2'>
                        <select onChange={::this.onSortChange} className='form-control' defaultValue={sortField[0]}>
                            {sortTypes.map((sortValue, index) => {
                                return <option key={index}  value={Object.keys(sortValue)[0]}>{sortValue[Object.keys(sortValue)[0]]}</option>
                            })}
                        </select>
                    </div>
                </div>

            </form>
        </div>
    }
}