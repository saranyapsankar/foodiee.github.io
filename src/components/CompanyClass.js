import react from 'react';
import UserContext from '../assets/UserContext';
export class CompanyClass extends react.Component {
    constructor(props) {
        super(); 
        this.state = {
            count : 0,
            count1: 100,
            userInfo : {
                name: 'Demo User',
                avatar_url: 'https://avatars.githubusercontent.com/u/9919?s=460&v=4',
            }
        }  
        //console.log(this.props, props)
   }
    async componentDidMount() {
        // const userRes = await fetch('https://api.github.com/users/saranyapsankar');
        // const json = await userRes?.json();
        this.setState({
            userInfo: {name: 'Saranya Sivasankaran',
                avatar_url: 'https://avatars.githubusercontent.com/u/19200430?v=4'}
        });
        this.interval = setInterval(()=>{
            //console.log('print 0 interval')
        }, 1000);
      }
    render() {
        //console.log(this.props, 'does it prisnt')
        const { title, description, mission } = this.props?.aboutData;
        const {count, count1, userInfo} = this.state;
        return (
            <div className="d-flex-col info-card no-border">
            <h4>{title}</h4>
            <div>{description}</div>
            <p>{mission}</p>

            <h4>User Info</h4>
            <div className='d-flex-col'>
                <div>{userInfo?.name}</div>
                <img className="user-image" src={userInfo?.avatar_url}/>
                <UserContext.Consumer>
                    {(data)=>{
                       return <span className='italic font-bold text-teal-700'>{data?.loggedInUser}</span>
                    }}
                </UserContext.Consumer>
                
            </div>
            {/* <button className='filter-btn sm'
            onClick={()=>{
                this.setState({
                    count: this.state.count + 1,
                    count1: this.state.count1 - 1
                })
            }}>Counter</button>
            <b>Count : {count} + {count1} = {count + count1}</b> */}
        </div>
        )
    }

    componentWillUnmount() {
       clearInterval(this.interval);
    }

} 