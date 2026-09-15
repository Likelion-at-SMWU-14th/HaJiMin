import { useDeleteUser } from "../hooks/useDeleteUser";

function DeleteUser() {
  const { mutate, isPending } = useDeleteUser();
  const userId = Number(localStorage.getItem("userId"));

  const handleDelete = () => {
    if (!userId) return;

    mutate(userId);
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending || !userId}
    >
      {isPending ? "삭제 중..." : "회원 탈퇴"}
    </button>
  );
}

export default DeleteUser;
