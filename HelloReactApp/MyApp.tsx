import * as React from 'react';
import * as ReactDOM from 'react-dom';


class MyApp
{
	public bootUp()
    {
		ReactDOM.render(
            <div>
				<h2>Hello React</h2>
				<p>This example demonstrates how the React rendering is transpiled to JavaScript</p>
            </div>,
            document.querySelector("#myAppStartsHere")
        );
    }
}

let myApp = new MyApp();	
myApp.bootUp();

