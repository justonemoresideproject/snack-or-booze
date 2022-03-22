import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function NewItemForm() {
    return (
        <form>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        New Item
                    </CardTitle>
                    <CardText className="font-italic">
                        <label>Drink</label>
                        <input type='radio' name='drink' id='drink-radio' value='drink'></input><br/>
                        <label>Snack</label>
                        <input type='radio' name='snack' id='snack-radio' value='snack'></input>
                    </CardText>
                        <p>
                            <b>Name:</b>
                            <input type='text' name='name-input' id='name-input'
                            value='name-input'/>
                        </p>
                        <p>
                            <b>Description:</b>
                            <input type='text' name='description-input' id='description-input' value='description-input'/>
                        </p>
                        <p>
                            <b>Recipe:</b> <input type='text' name='recipe-input'id='recipe-input' value='recipe-input-value'/>
                        </p>
                        <p>
                            <b>Serve:</b> <input type='text' name='recipe-serve'id='recipe-serve' value='recipe-serve-value'/>
                        </p>
                </CardBody>
            </Card>
        </form>
    )
}