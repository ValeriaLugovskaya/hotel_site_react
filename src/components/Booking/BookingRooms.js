import { Component } from 'react';
import './bookingRooms.scss';
import InputMask from 'react-input-mask';

class BookingRooms extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            phone: '',
            startDate: '',
            lastDate: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            firstName: '',
            lastName: '',
            middleName: '',
            phone: '',
            startDate: '',
            lastDate: ''
        })
    }

    render(){
        const {firstName, lastName, middleName, phone, startDate, lastDate} = this.state;
     return(
        <div className="book_block" id = "booking">
            
            <div className="book_block_textcontent">
            
            <h4 className="textcontent_title">
                    Забронировать номер
                </h4>    
                <p className="textcontent_text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,<br/>
                     temporibus fugit, facilis voluptas autem quia fuga impedit similique<br/>
                      voluptatibus quaerat fugiat quas quod reprehenderit<br/> maiores pariatur
                       excepturi culpa, numquam tempora?
                </p>
            </div>
    
            <form
                className="book_block_form"
                onSubmit = {this.onSubmit}>                                
                    <fieldset>
                        <label> Введите имя
                        
                            <input type="text"
                                className="form-control new-post-label"
                                placeholder="Введите своё имя"
                                name="firstName"
                                value={firstName} 
                                onChange={this.onValueChange}/>
                        </label>
                        <br/>
                        <label> Фамилия
                        
                            <input type="text"
                            title = 'esfbdsbfh'
                                className="form-control new-post-label"
                                placeholder="Введите фамилию"
                                name="lastName"
                                value={lastName} 
                                onChange={this.onValueChange}/>
                        </label>
                        <br/>
                        <label> Отчество
                            
                            <input type="text"
                                className="form-control new-post-label"
                                placeholder="Введите отчество"
                                name="middleName"
                                value={middleName} 
                                onChange={this.onValueChange}/>
                        </label>
                        <br/>
                        <label> Дата заезда
                        
                            <input 
                                type="date"
                                className="form-control"
                                placeholder="Дата заезда"
                                name="startDate"
                                value={startDate} 
                                onChange={this.onValueChange}/> 
                        </label>   
                        <br/>
                        <label> Дата отъезда
                        
                            <input 
                                type="date"
                                className="form-control new-post-label"
                                placeholder="Дата отъезда"
                                name="lastDate"
                                value={lastDate} 
                                onChange={this.onValueChange}/> 
                        </label>   
                        <br/>
                            <label> Номер телефона
                            <InputMask 
                                mask='(+7) 999 999-99-99' 
                                className="form-control new-post-label"
                                placeholder='Номер телефона'
                                value={phone} 
                                name = "phone"
                                onChange={this.onValueChange}>
                            </InputMask>
                        
                            <button type="submit" onClick={ e => this.onSubmit(e) }
                           className="book_block_btn">Добавить</button>
                        </label>   
                           
                    </fieldset>  
                           <br/>
           
        </form>
    </div>
    
    )
}
}

export default BookingRooms;



