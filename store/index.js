import moment from 'moment';


const getDefaultState = () => {
  return {
    isSidebarToggled: true,
    isModal: false,
  }
};
// const state = getDefaultState()
const state = () => ({
  isSidebarToggled: true,
  isLeftPanelToggled: false,
  isRightPanelToggled: false,
  isModal: false,
  modalType: '',
  isMobileView: true,
  device: {},
  language: 'en'
});

const mutations = {
  setLeftPanelToggle(state) {
    return (state.isLeftPanelToggled = !state.isLeftPanelToggled);
  },
  setRightPanelToggle(state){
    return (state.isRightPanelToggled = !state.isRightPanelToggled);
  },
  // sidebar toggle handler
  setSidebarToggle(state) {
    return (state.isSidebarToggled = !state.isSidebarToggled);
  },
  // modal handler
  showModal(state) {
    state.isModal = true;

  },
  closeModal(state) {
    state.isModal = false;
    state.modalType = ''
  },
  logout(state) {
    Object.assign(state, getDefaultState())
  },
  setDevice(state, value){
    state.device = value
    if (value.isMobile || value.isTablet){
      state.isLeftPanelToggled = false;
      state.isRightPanelToggled = false;
    }
  },
  SET_MODAL_TYPE(state, value){
    state.isModal = true
    state.modalType = value
  },
  SET_LANGUAGE(state, value) {
    state.language = value
  }
};
const actions = {
  // setModa({ commit }) {
  //   return new Promise(() => {
  //     commit('RESET_STATE')
  //   })
  // },
  // setAccount({ commit }, account) {
  //   commit('SET_ACCOUNT', account)
  // },
  setModalType({commit}, role){
    commit('SET_MODAL_TYPE', role)
  },
  formatTableDate({commit}, date) {
    return new Promise((resolve, reject) => {
        resolve( moment(date).utc().format('YYYY-MM-DD,  hh:mm:ss A') )
    })
  }
}

export default {
  state,
  mutations,
  actions
  // getters
}