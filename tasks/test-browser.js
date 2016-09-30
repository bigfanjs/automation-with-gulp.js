import karma from 'karma';

export const Server = karma.Server;
export default function ( configFile ) {
  return callback => {
    (new Server({ configFile }, callback)).start();
  };
}