import React from 'react';
let ListData=[
  ["The Lord of the Rinds0", "J.R.R.Tolkien0", "English0", "1954-19550", "150 millions0"],
  ["The Lord of the Rinds1", "J.R.R.Tolkien1", "English1", "1954-19551", "150 millions1"],
  ["The Lord of the Rinds2", "J.R.R.Tolkien2", "English2", "1954-19552", "150 millions2"],
  ["The Lord of the Rinds3", "J.R.R.Tolkien3", "English3", "1954-19553", "150 millions3"],
  ["The Lord of the Rinds4", "J.R.R.Tolkien4", "English4", "1954-19554", "150 millions4"],
  ["The Lord of the Rinds5", "J.R.R.Tolkien5", "English5", "1954-19555", "150 millions5"],
  ["The Lord of the Rinds6", "J.R.R.Tolkien6", "English6", "1954-19556", "150 millions6"]
]

export default class Table extends React.Component{
     constructor(props){
        super(props);
        this.state={
            data:ListData,
            sortby:null,
            descending:true,
            edit:{}
        }
        this._sort=this._sort.bind(this);
        this._showEditor=this._showEditor.bind(this);
        this._save=this._save.bind(this);
    }
    _sort(e){ //ordena
        let column = e.target.cellIndex; //pega a cell clicada
        let data = this.state.data.slice();
        let descending = this.state.sortby===column&&!this.state.descending; //verifuca se a coluna clicada == col 
        console.log({data,descending,column});
        data.sort((a,b)=>{
            return descending
            ?(a[column]<b[column]?1:-1)
            :(a[column]>b[column]?1:-1);
        });
        this.setState({
            data: data,
            sortby: column,
            descending: descending,
        })
    }
    _showEditor(e){
        this.setState({
            edit: {
                row: e.target.parentElement.rowIndex-1,
                cell: e.target.cellIndex
            }
        })
        console.log({row:e.target.parentElement.rowIndex-1, cell:e.target.cellIndex});
    }
    _save(e){
        e.preventDefault();
        let input = e.target.firstChild;
        let data = this.state.data.slice();

        data[this.state.edit.row][this.state.edit.cell]=input.value;
        this.setState({
            data:data,
            edit:null
        })

    }
   render(){
    return(     
                <table>
                    <thead onClick={this._sort}>
                        <tr>
                            {this.props.heads.map((title,index)=>{
                                if(this.state.sortby===index){
                                    title+=this.state.descending?'\u2191':'\u2193'
                                }
                               return <th key={index}>{title}</th>
                            })}
                        </tr>   
                    </thead>
                    <tbody onDoubleClick={this._showEditor}>
                        {this.state.data.map((row,indexRow)=>{
                            return (
                                <tr key={indexRow}>{row.map((col,indexCol)=>{
                                    let edit = this.state.edit;
                                    if(edit&&edit.row===indexRow&&edit.cell===indexCol){
                                        return (
                                            <td key={indexCol}> 
                                                <form onSubmit={this._save} >
                                                    <input type='text' />
                                                </form>
                                            </td>
                                        );
                                    }
                                    return  <td key={indexCol}>{col}</td>;
                                     })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table> 
        )
    };
}