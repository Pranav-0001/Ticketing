import amqp from "amqplib";

let channel, connection;

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

export const closeConnection = async () => {
  try {
    await channel.close();
    await connection.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error closing connection -', error);
  }
};

export const sendToQueue = async (queueName, data) => {
  try {
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
  } catch (error) {
    console.log({ error });
  }
};
