import useApi from "@/composables/useApi";

export default function agendaService() {
  const { list, getById, post, update, excluir } = useApi(
    process.env.VUE_APP_URL_API
  );

  return {
    list,
    getById,
    post,
    update,
    excluir,
  };
}
