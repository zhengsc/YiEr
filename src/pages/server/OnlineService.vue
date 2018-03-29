<template>
	<div class="onlineService">
		<img src="/src/images/server/online-icon.png" alt="" />
		<div>
			<h3>在线咨询</h3>
			<p>8:00 - 18:00在线</p>
		</div>
		<i>免费</i>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.onlineService {
		position: relative;
		width: 6rem;
		height: 1.6rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background: #fff;
		padding-left: .5rem;
		border-radius: .1rem;
		margin-top: .84rem;
		img {
			width: 1rem;
			height: 1rem;
			margin-right: .36rem;
		}
		i {
			position: absolute;
			top: 0;
			right: 0;
			display: block;
			width: .92rem;
			height: .68rem;
			background: url('/src/images/server/online-tips-icon.png') no-repeat top right;
			background-size: cover;
			border-top-right-radius: .1rem;
			color: #fff;
			font-size: 24px;
			font-style: normal;
			text-align: right;
		}
		h3 {
			font-size: 32px;
			color: #1e1e1e;
		}
		p {
			font-size: 24px;
			color: #b2b2b2;
			margin-top: .24rem;
		}
	}
</style>
