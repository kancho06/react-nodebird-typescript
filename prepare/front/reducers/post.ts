export interface Post {
    mainPosts: any;
    imagePaths: any;
    postAdded: boolean;
}

export type PostAction = {
    ADD_POST: "ADD_POST";
};

// 씨퀄라이져 사용시 본데이터가아닌 관계형으로 묶여있는데이터를 가져올때는 대문자로 쓴다.
const initialState: Post = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: "jason",
            },
            content: "first post #hashtag #express",
            Images: [
                {
                    src: "https://1.bp.blogspot.com/-QELd67pUwLw/XTgEGbI0_nI/AAAAAAAARRY/s6GHJQssgx43RKOyqRUU_tRIhvMnkVupQCLcBGAs/s1600/pink-rose-250x250.png",
                },
                {
                    src: "https://www.codingfactory.net/wp-content/uploads/abc.jpg",
                },
                {
                    src: "https://cdn.crowdpic.net/list-thumb/thumb_l_572442AD59D1F0170C27B68AC7F4377A.jpg",
                },
            ],
            Comments: [
                {
                    User: {
                        nickname: "jack",
                    },
                    content: "what a beautiful post!",
                },
                {
                    User: {
                        nickname: "martini",
                    },
                    content: "sexy jason",
                },
            ],
        },
    ],
    imagePaths: [],
    postAdded: false,
};

const dummy = {
    id: 2,
    content: "This is dummy",
    User: {
        id: 1,
        nickname: "jason",
    },
    Images: [],
    Comments: [],
};

export const createAction = (action: PostAction, data?: any) => {
    return {
        type: action,
        data: data,
    };
};

function reducer(state = initialState, action: any) {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                mainPosts: [dummy, ...state.mainPosts],
            };
        default:
            return state;
    }
}

export default reducer;
