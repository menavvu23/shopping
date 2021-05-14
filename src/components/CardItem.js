import React from 'react'
import {Button, Card, Icon, Image} from 'semantic-ui-react'

const CardExampleCard = (props) => {

    const cardList = () => {
        return props.cards.map((card) => {
            return <Card>
                <Image
                    src={card.image}
                    wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{card.title}</Card.Header>

                    <Card.Description>
                        {card.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='dollar'/>
                        {card.price}
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Add to cart
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        })
    }


    return (
        cardList()
    )
}

export default CardExampleCard