import amqp from "amqplib";

var channel, connection;

export const connectQueue = async () => {
  try {
    connection = await amqp.connect("amqp://rabbitmq-srv:5672");
    channel = await connection.createChannel();
    await channel.assertQueue("user-created");
    console.log('Successfully connected to RabbitMQ');
  } catch (error) {
    console.error('Error connecting to RabbitMQ -', error);
  }
};

export const userCreatedEvent = async (data) => {
  try {
    // send data to queue
    await channel.sendToQueue(
      "user-created",
      Buffer.from(JSON.stringify(data))
    );
  } catch (error) {
    console.log({ error });
  }
};
