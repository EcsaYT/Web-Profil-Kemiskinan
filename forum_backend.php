<?php
    // Nama file untuk menyimpan data posting
    $fileName = 'forum_posts.json';

    // Fungsi untuk mendapatkan semua posting dari file
    function getPosts() {
      global $fileName;
        if (file_exists($fileName)) {
            $postsJson = file_get_contents($fileName);
            return json_decode($postsJson, true);
        } else {
        return [];
        }
    } 

    // Fungsi untuk menambah posting ke file
    function addPost($username, $content) {
    global $fileName;
    $posts = getPosts();

    // Buat objek posting baru
    $newPost = [
        'username' => $username,
        'content' => $content,
        'timestamp' => date('Y-m-d H:i:s')
    ];

    // Tambahkan posting baru ke array
    $posts[] = $newPost;

    // Simpan array posting ke file
    file_put_contents($fileName, json_encode($posts));

    return $newPost;
}

// Proses permintaan AJAX
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];

    // Tangani permintaan tambah posting
    if ($action === 'addPost') {
        $username = $_POST['username'];
        $content = $_POST['content'];
        $newPost = addPost($username, $content);
        echo json_encode($newPost);
    }
} else {
    // Tangani permintaan membaca semua posting
    $posts = getPosts();
    echo json_encode($posts);
}
?>
