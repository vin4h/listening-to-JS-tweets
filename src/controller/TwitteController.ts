import Twitte from "../model/Twitte";
import ListenTwitteService from '../services/ListenTwiteService';

class TwitteController {
    public async getTwitte(): Promise<Twitte[]> {
        const listenService = new ListenTwitteService();
        
        const twittes = listenService.execute();

        return twittes;
    }
}

export default TwitteController;