import React from "react"
import { Input, Button, Form, Grid, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./App.css"

function FormComponent(props) {
    return (
        <div>
            <Grid columns={2} stackable textAlign='center'>
            <Divider vertical> </Divider>
            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                    <h1>Welcome</h1>
                    <hr/><br/>
            <form>
                <Form.Field
                    control={Input}
                    label='First name: '
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name"
                />
                <br />
                <Form.Field
                    control={Input}
                    label='Last name: '
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"
                />
                <br />

                <Form.Field
                    control={Input}
                    label='Phone No:  '
                    name="phone"
                    value={props.data.phone}
                    onChange={props.handleChange}
                    placeholder="Phone"
                />
                <br />
                <label>Gender: </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={props.data.gender === "male"}
                            onChange={props.handleChange}
                        /> Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={props.data.gender === "female"}
                            onChange={props.handleChange}
                        /> Female
                    </label>
                <br />
                <br />
                <select
                    value={props.data.destination}
                    name="lunch"
                    onChange={props.handleChange}
                >
                    <option value="">-- Please Choose a lunch --</option>
                    <option value="Kebab">Kebab</option>
                    <option value="Pide">Pide</option>
                    <option value="Lahmacun">Lahmacun</option>
                    <option value="Pizza">Pizza</option>
                </select>

                <br />
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="sade"
                        onChange={props.handleChange}
                        checked={props.data.sade}
                    /> Sade
                </label>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="acili"
                        onChange={props.handleChange}
                        checked={props.data.acili}
                    /> Acılı
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="soslu"
                        onChange={props.handleChange}
                        checked={props.data.soslu}
                    /> Soslu
                </label>
                <br />
                <br />

                <Button>Submit</Button>
            </form>
                </Grid.Column>
            <Grid.Column> <h2>Entered information</h2>
            <br/>
            <p>Your Name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your Phone: {props.data.phone}</p>
            <p>Your Gender: {props.data.gender}</p>
            <p>Your Lunch: {props.data.lunch}</p>
            <p>Your Choices:</p>
            <p>Sade: {props.data.sade ? "Yes" : "No"}</p>
            <p>Acılı: {props.data.acili ? "Yes" : "No"}</p>
            <p>Soslu : {props.data.soslu ? "Yes" : "No"}</p>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default FormComponent
