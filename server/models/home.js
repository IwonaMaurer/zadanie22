import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const homeSchema = new Schema({

});

class Home extends Component {
    render() {
      return (
        <div>
          <h2>Hello world!</h2>
        </div>
      );
    }
  }

export default mongoose.model('Home', homeSchema);
