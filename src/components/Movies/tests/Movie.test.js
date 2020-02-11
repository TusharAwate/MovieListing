import React from 'react';
import { render } from '@testing-library/react';
import Movie from '../Movie';
describe('Movie', () => {
    it('should render and match the snapshot', () => {
        const props = {
            movie: { poster_path: 'test_poster_path', title: 'test_title' },
            config: { images: { secure_base_url: 'test_secure_base_url' } },
            genres: ['genre1', 'genre2']
        };


        const {
            container: { firstChild },
        } = render(<Movie {...props} />);

        expect(firstChild).toMatchSnapshot();
    });

});

