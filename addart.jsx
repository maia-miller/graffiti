import react from 'react'
import {addArt} from '../api.js'

class AddArt extends React.Component {
  constructor (props) {
    super(props) {
      this.state = {
        suburb: '',
        address: '',
        artist: '',
        descr: '',
        style:''
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
      this.setState=({[e.target.name]: [e.target.value]})
    }

    submit() {
      addArt(this.state)
    }

  }
  render () {
    return (
      <form>
        <label>Suburb</label>
        <input type="text" name="suburb" onChange={this.handleChange()} />
      
        <label>Address</label>
        <input type="text" name="address" onChange={this.handleChange()} />

        <label>Artist</label>
        <input type="text" name="artist" onChange={this.handleChange()} />

        <label>Description</label>
        <input type="text" name="descr" onChange={this.handleChange()} />

        <label>Style</label>
        <select name="style" onChange={this.handleChange()} >
          <option>Art Deco</option>
          <option>Abstract</option>
          <option>Realistic</option>
        </select>

        <button onClick={this.submit}>Add Art</button>
      
      </form>
    )
  }
}

export default AddArt
