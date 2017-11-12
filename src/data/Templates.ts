import SavedTemplate from '../models/SavedTemplate';
import Block, {BlockTypes} from '../models/Block';

let templates = Array<SavedTemplate>();

let title = new Block();
title.id = 1;
title.title = 'Title';
title.icon = 'text_format';
title.description = 'Static text block';
title.type = BlockTypes.StaticText;

let intro = new Block();
intro.id = 2;
intro.title = 'Introduction';
intro.icon = 'text_format';
intro.description = 'Static text block';
intro.type = BlockTypes.RemoteText;

let stats = new Block();
stats.id = 3;
stats.title = 'Graph';
stats.icon = 'timeline';
stats.description = 'Pulls in statistics and renders in a graph';
stats.type = BlockTypes.RemoteStats;

let keyinfo = new Block();
keyinfo.id = 4;
keyinfo.title = 'Key information';
keyinfo.icon = 'list';
keyinfo.description = 'Presents key info in a list';
keyinfo.type = BlockTypes.RemoteList;

let body = new Block();
body.id = 5;
body.title = 'Body';
body.icon = 'description';
body.description = 'Text block pulled from the server. Contains multiple sub-fields';
body.type = BlockTypes.RemoteText;

let row1 = Array<Block>();
let row2 = Array<Block>();
let row3 = Array<Block>();
let row4 = Array<Block>();

row1.push(title);
row2.push(intro);
row3.push(stats, keyinfo);
row4.push(body);

let sample = new SavedTemplate();
sample.id = 1;
sample.title = 'Title, intro & key statistics';
sample.description = 'A popular choice. Presents useful information in such a way that it can be easily digested';

sample.addRows(4);
sample.addBlocks(0, row1);
sample.addBlocks(1, row2);
sample.addBlocks(2, row3);
sample.addBlocks(3, row4);

templates.push(sample);

export default templates;




