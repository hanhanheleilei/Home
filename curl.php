 header("Content-type:application/octet-strem");//第一步通过http协议告诉向客户端其后要发送给你的数据是一个应用程序数据
 header('Content-disposition:attachment;filename=video.mp4');//第二步通过http协议告诉客户端其后发送给你的数据要作为一个附件保存
 echo flie_get_contents('video.mp4');//将数据发送给服务器
