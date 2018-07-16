import * as React from 'react';
import * as ReactDOM from 'react-dom';


interface MyComponentProps
{
    person: string;
}

interface MyComponentState
{
    greetingAcknowledged: boolean;
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState>
{
	constructor(props: MyComponentProps)
    {
        super(props);
		this.state = { greetingAcknowledged: false } as MyComponentState;
	}

	private personAcknowledged() : void
	{
		this.setState( { greetingAcknowledged: true } );
	}
	
	render(): JSX.Element | null | false
	{
		return (
            <div>
				<h3>Hello { this.props.person }. Welcome to our App. Click the button to Acknowledge our greeting</h3>
				{ !this.state.greetingAcknowledged ? <button onClick= { (e) => { this.personAcknowledged() } } >Acknowledge</button> :  <p>All acknowledged and we are happy </p> }
            </div>
        );
	}

}

class MyApp
{
	public bootUp()
    {
		ReactDOM.render(
            <MyComponent>
            </MyComponent>,
            document.querySelector("#myAppStartsHere")
        );
    }
}

let myApp = new MyApp();	
myApp.bootUp();

