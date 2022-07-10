import { Component } from "react";
import "./bookingRooms.scss";
import InputMask from "react-input-mask";

class BookingRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char: {},
      loading: false,
      loaded: false,
      /* firstName: '',
            lastName: '',
            middleName: '',
            phone: '',
            startDate: '',
            lastDate: '',
            roomNumber: '' */
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onloading() {
    this.setState({ loading: true });
  }

  postFun() {
    console.log(this.state.loading);
    const req = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        person: {
          phone_number: this.state.phone,
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          father_name: this.state.middleName,
        },
        room: this.state.roomNumber,
        dates: {
          arrive_date: this.state.startDate,
          leave_date: this.state.lastDate,
        },
      }),
    };

    fetch("http://127.0.0.1:8081//paradise/booking/add", req)
      .then(this.setState({ loading: true }))
      .then((response) => response.json())
      .then(this.setState({ loading: false }))
      .then(this.setState({ loaded: true }));
  }

  componentDidUpdate() {
    if (this.state.loaded) {
      setTimeout(() => {
        this.setState({ loaded: false });
      }, 1000);
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      middleName: "",
      phone: "",
      startDate: "",
      lastDate: "",
      roomNumber: "",
    });
    this.postFun();
  };

  onRadioChange = (e) => {
    this.setState({
      roomNumber: e.target.value,
    });
  };

  validatingFields = (e) => {
    let regex = /[!0123456789@#$№%^&*+=()_]$/g;

    if (e.target.name === "middleName" && regex.test(e.target.value)) {
      Document.render(<p>wqeqwe</p>);
    }
  };

  render() {
    const {
      firstName,
      lastName,
      middleName,
      phone,
      startDate,
      lastDate,
      roomNumber,
    } = this.state;
    return (
      <div className="book_block" id="booking">
        <div className="book_block_textcontent">
          <h4 className="textcontent_title">Забронировать номер</h4>
          <p className="textcontent_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            <br />
            temporibus fugit, facilis voluptas autem quia fuga impedit similique
            <br />
            voluptatibus quaerat fugiat quas quod reprehenderit
            <br /> maiores pariatur excepturi culpa, numquam tempora?
          </p>
        </div>

        <form className="book_block_form" onSubmit={this.onSubmit}></form>
        <fieldset>
          <label>
            {" "}
            Введите имя
            <input
              type="text"
              className="form-control new-post-label"
              placeholder="Введите своё имя"
              name="firstName"
              value={firstName}
              onChange={this.onValueChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Фамилия
            <input
              type="text"
              title="esfbdsbfh"
              className="form-control new-post-label"
              placeholder="Введите фамилию"
              name="lastName"
              value={lastName}
              onChange={this.onValueChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Отчество
            <input
              type="text"
              onKeyUp={this.validatingFields}
              className="form-control new-post-label"
              placeholder="Введите отчество"
              name="middleName"
              value={middleName}
              onChange={this.onValueChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Дата заезда
            <input
              type="date"
              className="form-control"
              placeholder="Дата заезда"
              name="startDate"
              value={startDate}
              onChange={this.onValueChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Выберите номер комнаты
            <br />
            <form className="form_radio_buttons">

         
            <select name="choice">
                <option value="1"
                onChange={this.onRadioChange}>
                    Первая комната</option>
                <option value="2" 
                onChange={this.onRadioChange}>
                    Вторая Комната</option>
                <option value="3"
                 onChange={this.onRadioChange}>третья комната</option>
                <option value="4"
                onChange={this.onRadioChange}>Четвертая комната</option>
            </select>

             {/*  <label htmlFor="1">№1</label>
              <input
                type="radio"
                id="1"
                className="radioButton"
                value="1"
                onChange={this.onRadioChange}
                checked={roomNumber === "1" ? true : false}
              />

              <label htmlFor="2">№2</label>
              <input
                id="2"
                type="radio"
                className="radioButton"
                value="2"
                onChange={this.onRadioChange}
                checked={roomNumber === "2" ? true : false}
              />
              <br />
              <label htmlFor="3">№3</label>
              <input
                id="3"
                type="radio"
                className="radioButton"
                value="3"
                onChange={this.onRadioChange}
                checked={roomNumber === "3" ? true : false}
              />
              <label htmlFor="4">№4</label>
              <input
                id="4"
                type="radio"
                className="radioButton"
                value="4"
                onChange={this.onRadioChange}
                checked={roomNumber === "4" ? true : false}
              />
             */}
             </form>
          </label>
          <br />
          <label>
            {" "}
            Дата отъезда
            <input
              type="date"
              className="form-control new-post-label"
              placeholder="Дата отъезда"
              name="lastDate"
              max="2022-06-04"
              min="2012-05-29"
              value={lastDate}
              onChange={this.onValueChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Номер телефона
            <InputMask
              mask="(+7) 999 999-99-99"
              className="form-control new-post-label"
              placeholder="Номер телефона"
              value={phone}
              name="phone"
              onChange={this.onValueChange}
            ></InputMask>            
            {this.state.loading ? <p>AAAAAAAA</p> : null}
            {this.state.loaded ? <p>HHHHHHHHHHHHHHHHHHHHHHHHHHHHH</p> : null}
          </label>
          <div className="wrapper">
              <div className="btn-groups"></div>
              <a                
                href={(e) => this.onSubmit(e)}
                className="booking_button"
              >
                Добавить
              </a>
            </div>
        </fieldset>
        <br />
      </div>
    );
  }
}

const Spinner = () => {
  return <p>гружусь.....</p>;
};

export default BookingRooms;
