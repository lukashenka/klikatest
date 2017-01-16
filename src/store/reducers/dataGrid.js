const initialState = {
    header: {
        author: 'Исполнитель',
        song: 'Песня',
        genre: 'Жанр',
        year: 'Год'
    },
    tableData: [
        {
            author: 'Исполнитель',
            song: 'Песня',
            genre: 'Жанр',
            year: '2013'
        },
        {
            author: 'Исполнитель',
            song: 'Песня',
            genre: 'Жанр',
            year: '2016'
        }
    ],
    pagination:{
        page: 1,
        pageCount: 100
    }
};

export default function table(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }

}
