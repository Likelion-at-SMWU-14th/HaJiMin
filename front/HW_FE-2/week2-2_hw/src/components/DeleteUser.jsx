import { useDeleteUser } from "../hooks/useDeleteUser";

function DeleteUser() {
  const { mutate, isPending } = useDeleteUser();
  const userId = 1;

  const handleDelete = () => {
    mutate(userId);
  };

  return (
    <button type="button" onClick={handleDelete} disabled={isPending}>
      {isPending ? "삭제 중..." : "회원 탈퇴"}
    </button>
  );
}

export default DeleteUser;
