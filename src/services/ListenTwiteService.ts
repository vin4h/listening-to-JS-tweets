import Twitte from '../model/Twitte';
import { api } from '../config/api';

class ListenTwitteService {
    public async execute(): Promise<Twitte[]> {
        const twittes: Twitte[] = [];

        const data = await await api.get('/search/recent');

        return twittes;
    }
}

export default ListenTwitteService;