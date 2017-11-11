import SavedTemplate from '../models/SavedTemplate';
import Block, {BlockTypes} from '../models/Block';

let templates = Array<SavedTemplate>();

let title = new Block();
title.id = 1;
title.title = 'Title';
title.icon = 'text_format';
title.type = BlockTypes.StaticText;

let intro = new Block();
intro.id = 2;
intro.title = 'Introduction';
intro.icon = 'text_format';
intro.type = BlockTypes.RemoteText;

let stats = new Block();
stats.id = 3;
stats.title = 'Graph';
stats.icon = 'timeline';
stats.type = BlockTypes.RemoteStats;

let keyinfo = new Block();
keyinfo.id = 4;
keyinfo.title = 'Key information';
keyinfo.icon = 'list';
keyinfo.type = BlockTypes.RemoteList;

let body = new Block();
body.id = 5;
body.title = 'Body';
body.icon = 'description';
body.type = BlockTypes.RemoteText;

let sample = new SavedTemplate();
sample.id = 1;
sample.title = 'Title, intro & key statistics';
sample.description = 'A popular choice. Presents useful information in such a way that it can be easily digested';
sample.blocks.push(title, intro, stats, keyinfo, body);

templates.push(sample);

export default templates;




