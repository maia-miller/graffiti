import react from 'react'
import {addArt} from '../api.js'
import {connect} from 'react-redux'

class AddArt extends React.Component {
  constructor (props) {
    super(props) 
      this.state = {
        suburb: '',
        address: '',
        artist: '',
        descr: '',
        style:''
      }
      this.handleChange = this.handleChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(e) {
      this.setState=({[e.target.name]: [e.target.value]})
    }

    onSubmit(e) {
      e.preventDefault()
      addArt(this.state)
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
          <option value={}>Art Deco</option>
          <option>Abstract</option>
          <option>Realistic</option>
        </select>

        <button onClick={this.onSubmit}>Add Art</button>
      
      </form>
    )
  }
}

const mapStateToProps = ({species} => {
    return {
    }
}
)

                         
export default connect(mapStateToProps)(AddArt)
