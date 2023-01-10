import useApi from "@/composables/useApi";

export default function agendaService() {
  const { list, getById, post, update, excluir } = useApi(
    "http://ampere1.zapto.org:3000"
  );

  return {
    list,
    getById,
    post,
    update,
    excluir,
  };
}
