// reducer.js


const initialState = {
  user: null, // 用户信息
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload ? {
          ...action.payload,
          username: action.payload.username || '', // 如果 username 为 null，则设置为空字符串
          email: action.payload.email || '', // 如果 email 为 null，则设置为空字符串
        } : null, // 处理 null 值的情况
      };
    default:
      return state;
  }
};

export default reducer;
