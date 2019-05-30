import React,{ Component } from 'react'
import classNames from 'classnames'
 const addClass2 = true
 class styles extends React.Component {
    render(){
        return (
	        <section>
			    <div className={classNames({"class1":true,"class2":addClass2})}>classnames</div>
	        </section>
        )
    }
}

export default styles

