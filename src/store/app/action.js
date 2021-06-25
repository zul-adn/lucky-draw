
const dummyData = [
    {
        name : "Indonesia",
        date : "26 Juni 2021",
        nomor : "6765"
    },
    {
        name : "Malaysia",
        date : "26 Juni 2021",
        nomor : "3456"
    },
    {
        name : "Brunai",
        date : "26 Juni 2021",
        nomor : "8980"
    },
    {
        name : "Thailand",
        date : "26 Juni 2021",
        nomor : "5654"
    },
    {
        name : "Vietnam",
        date : "26 Juni 2021",
        nomor : "1123"
    },
    {
        name : "Myanmar",
        date : "26 Juni 2021",
        nomor : "6765"
    },
    {
        name : "kamboja",
        date : "26 Juni 2021",
        nomor : "1231"
    },
    {
        name : "Indonesia",
        date : "26 Juni 2021",
        nomor : "6765"
    },
    {
        name : "Malaysia",
        date : "26 Juni 2021",
        nomor : "3456"
    },
    {
        name : "Brunai",
        date : "26 Juni 2021",
        nomor : "8980"
    },
    {
        name : "Thailand",
        date : "26 Juni 2021",
        nomor : "5654"
    },
    {
        name : "Vietnam",
        date : "26 Juni 2021",
        nomor : "1123"
    },
    {
        name : "Myanmar",
        date : "26 Juni 2021",
        nomor : "6765"
    },
    {
        name : "kamboja",
        date : "26 Juni 2021",
        nomor : "1231"
    },
    {
        name : "Brunai",
        date : "26 Juni 2021",
        nomor : "8980"
    },
    {
        name : "Thailand",
        date : "26 Juni 2021",
        nomor : "5654"
    },
    {
        name : "Vietnam",
        date : "26 Juni 2021",
        nomor : "1123"
    },
    {
        name : "Myanmar",
        date : "26 Juni 2021",
        nomor : "6765"
    },
    {
        name : "kamboja",
        date : "26 Juni 2021",
        nomor : "1231"
    },
]


const storeDatas = (payload) => ({ type : 'STORE_DATAS', datas: payload }) 

export const getAllDatas = () => {
    return (dispatch) => {
        dispatch(storeDatas(dummyData))
    }
}