<?php
$Fname=$_POST['Fname'];
$Mname=$_POST['Mname'];
$Lname=$_POST['Lname'];
$UserPic=$_POST['UserPic'];
$email=$_POST['email'];
$Yphoneno=$_POST['Yphoneno'];
$FatherFname=$_POST['FatherFname'];
$FatherMname=$_POST['FatherMname'];
$FatherLname=$_POST['FatherLname'];
$Fphoneno=$_POST['Fphoneno'];
$MotherFname=$_POST['MotherFname'];
$MotherMname=$_POST['MotherMname'];
$MotherLname=$_POST['MotherLname'];
$Mphoneno=$_POST['Mphoneno'];

// Database connection
$conn = new mysqli('localhost','root','','projectform');
if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO registration(Fname, Mname, Lname, UserPic, email, Yphoneno, FatherFname, FatherMname, FatherLname, Fphoneno, MotherFname, MotherMname, MotherLname, Mphoneno) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssssssss", $Fname, $Mname, $Lname, $UserPic, $email, $Yphoneno, $FatherFname, $FatherMname, $FatherLname, $Fphoneno, $MotherFname, $MotherMname, $MotherLname, $Mphoneno);
    $execval = $stmt->execute();
    if ($execval) {
        echo "Registration successful...";
    } else {
        echo "Error: " . $conn->error;
    }
    $stmt->close();
    $conn->close();
}
?>
