import { Card, Col, Text } from '@nextui-org/react';
import PropTypes from 'prop-types';

const CardImage = ({id, title, src}) => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          {id}
        </Text>
        <Text h4 color="white">
          {title}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={src}
      objectFit="cover"
      width="100%"
      height={150}
      alt="Card image background"
    />
  </Card>
);

CardImage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default CardImage;
