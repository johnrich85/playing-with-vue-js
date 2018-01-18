import { Link } from '../components/ui/navbar/link';

export const Routes  = [
    new Link('1', 'Home', '/', 'home'),
    new Link('2', 'Create', '/create', 'create'),
];

export const Steps  = [
    new Link('tab1', 'Step 1. Template', '#tab1', 'format_shapes'),
    new Link('tab2', 'Step 2. Subject', '#tab2', 'create'),
    new Link('tab3', 'Step 3. Populate', '#tab2', 'create'),
];