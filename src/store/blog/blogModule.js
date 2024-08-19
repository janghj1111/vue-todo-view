
// 스토어 만들기
//const store = createStore({
export const blogModule = {
  state: {
    // 호출방법 : store.state.count
    count: 0,
    list: [
      { id: 1, name: "사과", price: 1000 },
      { id: 2, name: "바나나", price: 2000 },
      { id: 3, name: "딸기", price: 3000 },
    ],
    msg: "초기 메시지",
  },
  getters: {
    // 호출방법 : store.getters.getCount; 또는 store.getters.getName(3);
    getCount(state) {
      // 단순하게 상태 리턴
      return state.count;
    },
    getMax(state) {
      // 최댓값 찾아 리턴
      return state.list.reduce((a, b) => {
        console.log(`a = ${a}`);
        console.log(`b = ${b}`);
        return a > b.price ? a : b.price;
      }, 0);
    },
    // '(id) =>' 형식은 매개변수로 id를 쓴다는 것.
    getItem(state) {
      // 리스트에서 일치하는 요소 찾아 리턴
      return (id) =>
        state.list.find((el) => {
          console.log(`el = ${el}`);
          return el.id === id;
        });
    },
    getName(state, getters) {
      console.log(state);
      console.log(getters);
      // 다른 게터 활용
      return (id) => getters.getItem(id).name;
    },
    getMsg(state) {
      return state.msg;
    },
  },
  mutations: {
    // 호출방법 : store.commit('setIncrement', data);
    setIncrement(state) {
      // Count up하는 뮤테이션 등록하기
      state.count++;
    },
    setData(state, resData) {
      state.count = resData;
    },
    setMsg(state, resData) {
      state.msg = resData;
    },
  },
  actions: {
    // 호출방법 : store.dispatch('actionType', payload)
    async doUpdate({ commit }, param) {
      await commit("setData", param);
    },
    async updataMsg({ commit }, param) {
      await commit("setMsg", param);
    },
  },
};
