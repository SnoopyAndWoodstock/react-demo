import React from'react';
import ItemList from '../components/ItemList';

class LogisticsList extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            data: [
                {
                    title:'物流公司1',
                    tj: 'a',
                    star: 3,
                    jiaoyi: 599,
                    time: 40,
                    monery: 555
                },
                {
                    title:'物流公司2',
                    tj: 'b',
                    star: 5,
                    jiaoyi: 54399,
                    time: 40,
                    monery: 555
                },
                {
                    title:'物流公司3',
                    tj: 'c',
                    star: 0,
                    jiaoyi: 345345,
                    time: 40,
                    monery: 555
                },
                {
                    title:'物流公司4',
                    tj: '',
                    star: 1,
                    jiaoyi: 345345,
                    time: 40,
                    monery: 555
                }
            ]
        }
    }

    componentDidMount() {

    }


    render() {
        var data = this.state.data;
        return(
            <div>
                {
                    data.map((item,index)=>{
                        return <ItemList item={item} />
                    })
                }

            </div>
        )
    }
}

export default LogisticsList;