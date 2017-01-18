import React, {Component} from 'react'

export default class DataFilter extends Component {

    onFilterChange(elem) {
        const {changeFilter} = this.props;
        const {id, value} = elem.target;
        const changedFilter = {};
        changedFilter[id] = value;
        changeFilter(changedFilter);
    }

    render() {
        const {fields, filterChoice} = this.props.filters;
        return <div>
            <form className='form-horizontal'>
                {Object.keys(fields).map((key) => {
                    return <div key={key} className='form-group'>
                        <label className='col-sm-2 control-label'>{fields[key]}</label>
                        <div className='col-sm-10'>
                            {!filterChoice[key] &&
                            <input onChange={::this.onFilterChange} type='text' className='form-control' id={key}
                                   placeholder={fields[key]}/>
                            }
                            {filterChoice[key] &&
                            <select onChange={::this.onFilterChange} className='form-control' id={key}>
                                return
                                <option id={key} value=''>Все</option>
                                {filterChoice[key].sort().map((filterValue, index) => {
                                    return <option key={'filter'+index} value={filterValue}>{filterValue}</option>
                                })}
                            </select>
                            }
                        </div>
                    </div>
                })}
            </form>
        </div>
    }
}