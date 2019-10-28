import React, {Component} from 'react';

class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            url: '',
            comment: ''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        const config = {
            method:'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                title: this.state.name,
                poster: this.state.url,
                comment: this.state.comment
            }),
        };
        const url = "https://post-a-form.herokuapp.com/api/movies"

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    alert(res.error);
                } else {
                    alert(`Saved ${res.title} movie`)
                }
            })
            .catch (e => {
                console.error(e);
                alert('Alert movie not saved')
            });
            
    }

    handleChange (e) {
        this.setState({[e.target.name] : e.target.value})
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name='name' value={this.state.name}  onChange={this.handleChange} required/> {/* Name of the film */}  
                <input name= 'url' value={this.state.url}  onChange={this.handleChange} required/> {/* Url of the film poster */}
                <textarea name='comment' value={this.state.comment}  onChange={this.handleChange} required> </textarea> {/* Comment about the film */}
                <button type='submit'> badjoras </button>{/* Submit button */}
            </form>
        );
    }

}

export default Form